import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



function createEntry(emojiPedia){
  return (
    <Entry 

    key={emojiPedia.id}
    emoji={emojiPedia.emoji}
    name={emojiPedia.name}
    meaning={emojiPedia.meaning}


    />

  );
}





function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEntry)};

      </dl>
    </div>
  );
}

export default App;
