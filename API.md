


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
    requestPermissions: [""]

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

    hideButton,
    disableButton,
    buttonText
}
```

## TextEntryScreen

```
{
    ...SimpleButtonScreen.Props,
    ...TextInput.props,

    stateKey,        // This is where whatever is entered into the text field will be saved
}
```

## Permission

```
{
    stateKey, 
    
    backgroundStyle,
    backgroundImage,

    right,
    left,
    header,
    headerContainerStyle,
    headerStyle,

    subheader,
    subheaderContainerStyle,
    subheaderStyle,

    permissionContainerStyle,
    permissionStyle,

    approvedPermissionContainerStyle,
    approvedPermissionStyle,



    permissions: [
        {
            permission: "",
            required: true,
            image: "",

            title: "",
            subtitle: "",

            containerStyle,
            style,
            approvedContainerStyle,
            approvedStyle

        }
    ]
}
```