import { Webhook } from "svix";
import User from "../models/User.model.js";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;
    console.log("Data and type", data, type);

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    switch (type) {
      case "user.created": {
        console.log("type: user.created");
        await User.create(userData);
        break;
      }
      case "user.updated": {
        console.log("type: user.updated");
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }
      case "user.deleted": {
        console.log("type: user.deleted");
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }

    res.json({ sucess: true, message: "WebHook Recieved" });
  } catch (error) {
    console.log(error.message);
    res.json({ sucess: false, message: error.message });
  }
};

export default clerkWebhooks;
