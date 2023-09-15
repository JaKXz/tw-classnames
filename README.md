# @jakxz/tw-classnames

This is a convenience wrapper around [`tailwind-merge`](https://npm.im/tailwind-merge) and [`clsx`](https://npm.im/clsx).

## Usage

```ts
import { classNames } from "@jakxz/tw-classnames";
// OR
import howeveryouwannanameit from "@jakxz/tw-classnames";
```

You can also use [`twMerge`](https://github.com/dcastil/tailwind-merge/blob/main/docs/features.md) directly as needed:

```ts
import { twMerge } from "@jakxz/tw-classnames";
```

## Contributing & Releasing

1. Fork it ( https://github.com/jakxz/tw-classnames/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`), do not modify the version in `package.json`
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

The PR will be squash merged following the [conventional commits spec](https://www.conventionalcommits.org/en/v1.0.0/#specification).

We use `npx standard-version -a` to generate the CHANGELOG and version update according to the commits.
