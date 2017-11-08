import React from 'react'
import HelloWorld from './HelloWorld'
import Slider from './Slider'
import LikeButton from './LikeButton'
import Bar from './Bar'

export default function App() {
  return <div>
    <h1>awesome app</h1>
    <Slider startValue="5" />
    <HelloWorld name="craphands" />
    <hr />
    <Slider />

    <LikeButton />
  </div>
}

// export default class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       page: 'about'
//     }
//   }

//   render() {
//     if (this.state.page === 'home') {
//       return <h1>home</h1>  
//     } else {
//       return <div>
//         <h1>about</h1>
//         <LikeButton />
//       </div>
//     }
//   }
// }

