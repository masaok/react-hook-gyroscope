# react-hook-gyroscope

A React hook to access data from the [Gyroscope API](https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope).

## Installation

Using `npm`:

```sh
npm install --save react-hook-gyroscope
```

Using `yarn`:

```sh
yarn add react-hook-gyroscope
```

## Usage

```jsx
import React from 'react'
import useGyroscope from 'react-hook-gyroscope'

const ComponentWithGyroscope = () => {
  const gyroscope = useGyroscope()

  return !gyroscope.error ? (
    <ul>
      <li>X: {gyroscope.x}</li>
      <li>Y: {gyroscope.y}</li>
      <li>Z: {gyroscope.z}</li>
    </ul>
  ) : (
    <p>No gyroscope, sorry.</p>
  )
}
```

### Using `SensorOptions`

https://w3c.github.io/gyroscope/#gyroscope-interface

If you want to use this feature, simply provide `useGyroscope` with a `SensorOptions` object:

```jsx
const gyroscope = useGyroscope({
  frequency: 60, // cycles per second
})
```

### Using a callback function

You can supply a second parameter to `useGyroscope` which will be called every time the data from the Gyroscope API is updated. This callback function is then called with the `gyroscope` object with all its properties.

If you don't use `SensorOptions`, supply `{}` as your first argument.

```jsx
const onGyroscopeUpdate = (gyroscope) => {
  console.log('Here’s some new data from the Gyroscope API: ', gyroscope)
}

const gyroscope = useGyroscope({}, onGyroscopeUpdate)
```

## Notes

Access to data from the Gyroscope API needs user permission.

If permission to access gyroscope was previously granted by the user, gyroscope data will be available. If permission to access was not granted previously, the user will be prompted to give permission when the component mounts.

## Caveats

Gyroscope API is available only in secure contexts (a.k.a. only using HTTPS).

## Credits

Credit to [Bence A. Tóth](https://github.com/bence-toth) for his original hook code for [Geolocation](https://www.npmjs.com/package/react-hook-geolocation).

## License

LGPL-3.0
