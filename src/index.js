import { useEffect, useState } from 'react'

const useGyroscope = ({ frequency } = {}, callback) => {
  const [angularVelocity, setAngularVelocity] = useState({
    x: null,
    y: null,
    z: null,
  })

  useEffect(() => {
    let sensor = new window.Gyroscope({ frequency })

    if (sensor) {
      sensor.start()
      sensor.onreading = () => {
        const readings = {
          x: sensor.x,
          y: sensor.y,
          z: sensor.z,
        }

        setAngularVelocity({
          ...readings,
        })

        if (callback instanceof Function) {
          callback({
            ...readings,
          })
        }
      }
      sensor.onerror = event => {
        console.log(event.error.name, event.error.message)
        setAngularVelocity({
          x: null,
          y: null,
          z: null,
        })
      }
    }

    return () => {}
  }, [callback, frequency])

  return angularVelocity
}

export default useGyroscope
