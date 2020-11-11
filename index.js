// gsap.set('.shading', {scaleX:-1, rotation:10, transformOrigin:'50% 50%'})

// gsap.from(".b1", {motionPath: {path:".pathLine", align:".pathLine", offsetX:-34, offsetY:-34}, duration:5, ease:'none', repeat:-1})

gsap.set('.b1', {transformOrigin:'60px 60px'})

gsap.timeline({repeat:-1, defaults:{duration:7, ease:'none'}})
    .from('.b1_color', {motionPath: {path:'.pathLine', align:'.pathLine', autoRotate: true, alignOrigin: [0.5, 0.5]}}, 0)
    .from('.b1_shade', {motionPath: {path:'.pathLine', align:'.pathLine', alignOrigin: [0.5, 0.5], offsetX:-8, offsetY:12 }}, 0)
    .fromTo('.color', {x:120},{x:-60, duration:1, repeat:6}, 0)
    // .progress(0.5)
