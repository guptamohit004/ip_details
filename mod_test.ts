import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getAllDetails } from "./mod.ts";

const ValidateIPaddress = (ipaddress: string) => {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
    return (true)
  }
  return (false)
}

Deno.test("test getAllDetails function", async (): Promise<void> => {
  var data= await getAllDetails();
  if(data.status=='success')
   assertEquals(ValidateIPaddress(data.ip), true);
});
