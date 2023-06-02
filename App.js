import { MySafeAreaView } from "./styling_components";
import MessagesList from "./MessagesList";

export default function App() {
  return (
    <MySafeAreaView style={MySafeAreaView}>
      <MessagesList />
    </MySafeAreaView>
  );
}
