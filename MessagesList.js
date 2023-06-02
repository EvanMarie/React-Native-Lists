import React, { useState } from "react";
import { SectionComponent, ListItemSeparator } from "./styling_components";
import { FlatList } from "react-native";
import ListItem from "./ListItem";
import SwipeableDelete from "./SwipeableDelete";

/* 
An array called messages is defined, which contains several objects 
representing different messages. Each message object has properties 
like id, title, description, image, and text. The image property 
uses the require function to load the image from the provided file path.
*/

const initialMessages = [
  {
    id: 1,
    title: "This is title 1",
    description: "This is description 1",
    image: require("./assets/icon_images/alarm-clock.png"),
    text: "What a mighty fine day! I wish I could go outside. I would like to go to the park and play with my friends.",
  },
  {
    id: 2,
    title: "This is title 2",
    description: "This is description 2",
    image: require("./assets/icon_images/boat.png"),
    text: "Have you ever seen the rain?",
  },
  {
    id: 3,
    title: "This is title 3",
    description: "This is description 3",
    image: require("./assets/icon_images/case.png"),
    text: "Good morning, everyone! Are we all ready for the big day? I know I am!",
  },
  {
    id: 4,
    title: "This is title 4",
    description: "This is description 4",
    image: require("./assets/icon_images/cashier.png"),
    text: "What's up, Doc?",
  },
  {
    id: 5,
    title: "This is title 5",
    description: "This is description 5",
    image: require("./assets/icon_images/cloud.png"),
    text: "Nothing to see here, move along! Why aren't you moving along? I said move along!",
  },
  {
    id: 6,
    title: "This is title 6",
    description: "This is description 6",
    image: require("./assets/icon_images/cut.png"),
    text: "I'm just a soul whose intentions are good.",
  },
  {
    id: 7,
    title: "This is title 7",
    description: "This is description 7",
    image: require("./assets/icon_images/graph2.png"),
    text: "No one expects the Spanish Inquisition! I am not sure why not. We have been around for a while.",
  },
];

/*
The MessagesList component is defined as a functional component. It receives 
props as its argument. Inside the component, a SectionComponent is used to
 wrap the FlatList component. The text prop of SectionComponent is set to 
 "Flat List".

    - Inside the FlatList component, the data is set to the messages array. 
    The keyExtractor prop is used to extract the id from each message object 
    and convert it to a string.
    - The renderItem prop is a function that renders each item in the FlatList.
     It receives an object with the item property, representing the current 
     item being rendered. Inside the function, a View with the messagesContainer 
     style is used to wrap the ListItem component.
    - The ListItem component is rendered with the title, description, image, 
    and text props extracted from the current item.
*/

function MessagesList(props) {
  // create a state variable to keep track of the messages
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from the messages array
    // Call the server to delete it from the backend
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SectionComponent text="Flat List">
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            text={item.text}
            onPress={() => console.log("Message clicked:", item.text)}
            // custom function to render the delete button
            renderRightActions={() => (
              <SwipeableDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 7,
              title: "This is title 7",
              description: "This is description 7",
              image: require("./assets/icon_images/graph2.png"),
              text: "No one expects the Spanish Inquisition! I am not sure why not. We have been around for a while.",
            },
          ]);
        }}
      />
    </SectionComponent>
  );
}

export default MessagesList;

/*
In summary, this code defines a component called MessagesList that renders a 
FlatList with messages. Each message is displayed using the ListItem component, 
and the entire list is wrapped in a custom SectionComponent. The data for the 
messages is provided through the messages array.
*/
