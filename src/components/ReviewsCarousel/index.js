import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  leftArrowItems = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index === 0) {
      this.setState({index: reviewsList.length - 1})
    } else {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  rightArrowItems = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index === reviewsList.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {index} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img
          src={reviewsList[index].imgUrl}
          alt={reviewsList[index].username}
        />
        <div className="arrows-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.leftArrowItems}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p>{reviewsList[index].username}</p>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.rightArrowItems}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p>{reviewsList[index].companyName}</p>
        <p>{reviewsList[index].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
