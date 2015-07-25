var tessel = require('tessel')
var ambientlib = require('ambient-attx4')

// module must be connected to port A
var ambient = ambientlib.use(tessel.port['A'])

ambient.on('ready', function () {
    // The readings will happen every 100 miliseconds
  setInterval(function () {
    ambient.getLightLevel(function (err, ldata) {
      if (err) throw err
      console.log('Light level:', ldata.toFixed(8))
    })
  }, 100)

  ambient.setLightTrigger(0.5)

  // Set a light level trigger
  // The trigger is a float between 0 and 1
  ambient.on('light-trigger', function (data) {
    console.log('Our light trigger was hit:', data)

    // Clear the trigger so it stops firing
    ambient.clearLightTrigger()
    // After 100 miliseconds reset light trigger
    setTimeout(function () { ambient.setLightTrigger(0.5) }, 100)
  })
})

ambient.on('error', function (err) {
  console.log(err)
})
