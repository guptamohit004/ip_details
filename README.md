# 🌐 Get All information of an IP address.

Get your public IP address Details in Deno.

[![Test CI](https://github.com/denorg/get-ip/workflows/Test%20CI/badge.svg)]()

## ⭐ Getting started

Import the `getAllDetails` function and use it:

```ts
import { getAllDetails } from "https://deno.land/x/ip_details/mod.ts";

const getDetails = async () => {
  console.log(`Ip details are: `);
  console.log(await getAllDetails())
}

getDetails();
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-net https://deno.land/x/ip_details/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-net -n ip-details https://deno.land/x/ip_details/cli.ts
```

Then, the package is available to run:

```bash
ip_details
```

### Configuration

Required permissions:

1. `--allow-net`

### Response
  * Success

          * IP Address
          * Country
          * Country Code
          * TimeZone
          * City
          * Service Provider
          * Zip Code
          * Continent
          * Starting of Week (Sunday / Monday)
          * Currency Code
          * Languages Spoken
          * Mobile Number Length
          * Calling Code

  * Fail

          * Invalid Query, Try again !!.


## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## 📄 License

The `ip_details` is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
