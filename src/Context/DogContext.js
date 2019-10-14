// import React, { Component } from 'react'

// export const nullDog = {
//   author: {},
//   tags: [],
// }

// const DogContext = React.createContext({
//   Dog: nullDog,
//   reviews: [],
//   error: null,
//   setError: () => {},
//   clearError: () => { },
//   setDog: () => {},
//   clearDog: () => {},
//   setReviews: () => {},
//   addReview: () => {},
// })

// export default DogContext

// export class DogProvider extends Component {
//   state = {
//     Dog: nullDog,
//     error: null,
//   };

//   setError = error => {
//     console.error(error)
//     this.setState({ error })
//   }

//   clearError = () => {
//     this.setState({ error: null })
//   }

//   setDog = Dog => {
//     this.setState({ Dog })
//   }

//   setReviews = reviews => {
//     this.setState({ reviews })
//   }

//   clearDog = () => {
//     this.setDog(nullDog)
//     this.setReviews([])
//   }

//   addReview = review => {
//     this.setReviews([
//       ...this.state.reviews,
//       review
//     ])
//   }

//   render() {
//     const value = {
//       Dog: this.state.Dog,
//       reviews: this.state.reviews,
//       error: this.state.error,
//       setError: this.setError,
//       clearError: this.clearError,
//       setDog: this.setDog,
//       setReviews: this.setReviews,
//       clearDog: this.clearDog,
//       addReview: this.addReview,
//     }
//     return (
//       <DogContext.Provider value={value}>
//         {this.props.children}
//       </DogContext.Provider>
//     )
//   }
// }
