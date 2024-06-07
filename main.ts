input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showNumber(randint(0, 9))
    }
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showNumber(randint(0, 9))
        break;
    }
})
