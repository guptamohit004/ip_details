# 🌐 Get All information of an IP address.

Get your public IP address in Deno.

[![Test CI](https://github.com/denorg/get-ip/workflows/Test%20CI/badge.svg)](https://github.com/denorg/get-ip/actions)

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
deno install --allow-net -n get-ip https://deno.land/x/ip_details/cli.ts
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

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
