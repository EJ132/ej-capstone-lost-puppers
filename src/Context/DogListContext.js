// import React, { Component } from 'react'

// const DogListContext = React.createContext({
//   DogList: [],
//   error: null,
//   setError: () => {},
//   clearError: () => {},
//   setDogList: () => {},
// })
// export default DogListContext

// export class DogListProvider extends Component {
//   state = {
//     DogList: [],
//     error: null,
//   };

//   setDogList = DogList => {
//     this.setState({ DogList })
//   }

//   setError = error => {
//     console.error(error)
//     this.setState({ error })
//   }

//   clearError = () => {
//     this.setState({ error: null })
//   }

//   render() {
//     const value = {
//       DogList: this.state.DogList,
//       error: this.state.error,
//       setError: this.setError,
//       clearError: this.clearError,
//       setDogList: this.setDogList,
//     }
//     return (
//       <DogListContext.Provider value={value}>
//         {this.props.children}
//       </DogListContext.Provider>
//     )
//   }
// }
