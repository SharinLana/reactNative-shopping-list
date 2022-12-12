# Shopping List (React Native)

> This is a simple mobile app to make a list of your purchases.

## The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- React Native components (View, Text, TextInput, Alert, etc) and understanding the difference in usage between them and React.js HTML tags;
- Modal component, to hide/show elements on the screen;
- FlaList component, to make the list of purchases scrollable and render only visible elements;
- KeyboardAvoidingView component, to avoid overlapping the input and buttons with a virtual keyboard on iOS;
- StatusBar color mode changing;
- Pressable component, to make a custom reusable button (there's only 1 button component that controlls all the visible buttons of the app);
- StyleSheet component to style the app;
- useWindowDimensions() hook, to adjust the app style based on portrait or landscape orientation;
- Platform component, to set different styles for iOS and Android;
- useState() hook;
- input validation logic;
- JS filter() method to delete unwanted items from the list;
- expo-linear-gradient package to apply a linear gradient on the app body;

## To start the app on your machine:

1. Clone the project to your machine by running:

```
git clone https://github.com/SharinLana/reactNative-shopping-list.git
```

2. To install the project dependencies, run:

```
npm install
```

3. When the installation is complete, run the following command to start the app:

```
npm start
```

4. Download and install Android Studio and Xcode, select simulators, and then, to run the app on Android, run:

```
a
```

To run the app on iOS, run:

```
i
```

## Languages, frameworks, libraries, packages, tools and technologies:

- ReactNative
- React.js
- JavaScript
- expo-status-bar
- expo-linear-gradient

## Functionalities:

- processing user input, receiving the entered data and displaying it as a list;
- displaying elements on demand (e.g. the input field appears on the screen only after clicking the "Add New Item" button);
- input validation and informing the user about input errors;
- removing the unwanted items from the list;
- cancelling the process of entering data into input;
- responsive design (portrait or landsacpe orientation).
