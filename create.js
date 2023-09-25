import { DoorDashClient } from "@doordash/sdk";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const client = new DoorDashClient({
  developer_id: process.env.DEVELOPER_ID,
  key_id: process.env.KEY_ID,
  signing_secret: process.env.SIGNING_SECRET,
});

const response = await client.createDelivery({
  external_delivery_id: uuidv4(),
  pickup_address: "test",
  pickup_phone_number: "test",
  dropoff_address: "test",
  dropoff_phone_number: "test",
});
