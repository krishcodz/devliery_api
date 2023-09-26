import { DoorDashClient } from "@doordash/sdk";
import "dotenv/config";

const client = new DoorDashClient({
  developer_id: process.env.DEVELOPER_ID,
  key_id: process.env.KEY_ID,
  signing_secret: process.env.SIGNING_SECRET,
});

const response = client
  .getDelivery("5ee84da9-c095-4914-8114-dd56c1d2f993")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(response);
