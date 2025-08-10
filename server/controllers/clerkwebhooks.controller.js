import { Webhook } from "svix";
import User from "../models/User.model.js";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    // ! Getting Header
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // ! Verify Headers
    await whook.verify(JSON.stringify(req.body), headers);

    // ! Getting Data From REQ Body ;
    const { data, type } = req.body;
    // !
    const userData = {
      _id: data.id,
      email: data.email_adresses[0].email_adress,
      username: data.first_name + " " + data.last_name,
      image: data.img_url,
    };

    // ! Switch Case For Different Event

    switch (type) {
      case "user.created": {
        await User.create(userData);
        break;
      }
      case "user.updated": {
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }
      default:
        break;
    }
    res.json({ sucess: true, message: "webhook recieved" });
  } catch (error) {
    console.log(error.message);
    res.json({ sucess: false, message: error.message });
  }
};

export default clerkWebhooks;
