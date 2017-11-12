


# Onboarder


let OnboarderView = Onboarder(ScreenConfig, OnboarderConfig)

## ScreenConfig

```
{
    // Give the screen a name
    Name: {
            // screen can be a custom component of yours, a React Navigation component or one of our custom built ones
            screen: Screen
        }
}
```

## OnboarderConfig

```
{
    // Order of the screen names from above. Only ones listed here will show up
    order: ["One", "Two"],
    animation: "push" or "slide"
}
```

# Built in Components

## SimpleButtonScreen

```
{
    backgroundStyle,
    backgroundImage,

    right,
    left,

    header,
    headerContainerStyle,
    headerStyle,

    middle,

    footer,
    footerContainerStyle,
    footerStyle,

    disableButton,
    buttonText
}
```