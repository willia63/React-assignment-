import React, { Component } from 'react';

class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '',
      textSize: '',
    };
  }

  componentDidMount() {
    const storedColorPreference = localStorage.getItem('color_preference');
    const storedSizePreference = localStorage.getItem('size_preference');

    if (storedColorPreference) {
      this.setState({ backgroundColor: storedColorPreference });
    }

    if (storedSizePreference) {
      this.setState({ textSize: storedSizePreference });
    }
  }

  changeColor = (selectedColor) => {
    this.setState({ backgroundColor: selectedColor });
    localStorage.setItem('color_preference', selectedColor);
  };

  customizeText = (selectedSize) => {
    this.setState({ textSize: selectedSize });
    localStorage.setItem('size_preference', selectedSize);
  };

  render() {
    const { backgroundColor, textSize } = this.state;

    return (
      <div>
        <h1>Remember user preferences (background color, font size, …) by using Local Storage API</h1>
        <div id="customization-card" style={{ backgroundColor, fontSize: textSize }}>
          <p>Lorem Ipsum</p>
          <img
            src="https://www.typingpal.com/images/1/3/a/8/4/13a845e178cb05ecc149ffc850ad9a6eac19f85d-lorem-ipsum.png"
            alt="Image"
            height="100px"
          />
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>

        <p>YOUR PERSONAL PREFERENCES:</p>
        <label>Select background color: </label>
        <select
          id="colorOption"
          value={backgroundColor}
          onChange={(e) => this.changeColor(e.target.value)}
        >
          <option value=""></option>
          <option value="red">RED</option>
          <option value="green">GREEN</option>
          <option value="yellow">YELLOW</option>
          <option value="ivory">IVORY</option>
          <option value="pink">PINK</option>
          <option value="purple">PURPLE</option>
        </select>

        <br />

        <label>Select Text Size: </label>
        <select id="sizeOption" value={textSize} onChange={(e) => this.customizeText(e.target.value)}>
          <option value=""></option>
          <option value="35px">VERY BIG</option>
          <option value="25px">BIG</option>
          <option value="16px">NORMAL</option>
        </select>
      </div>
    );
  }
}

export default Demo3;