import React from 'react'
import axios from 'axios'

const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=EzlcMwoRrcH4U87xsQ1y6a6J5MYJW28g&q=mushroom&limit=25&offset=0&rating=G&lang=en'

class GiphyApp extends React.Component {

// - a button
// when you click button it runs helper function
//       - to begin with, just console.log()
// - some state
//      - to begin with, just an empty array
// -update your helper function
//      -it should add the string "hello" to the array
// -open the component inspector
// - make sure that state array should get another "hello" string added to it every time you click the button

    constructor(props) {
        super(props);
        this.state = {
            giphies: []
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._getGiphy}>
                    🍄
                </button>
            </div>        
        )
    }


    _getGiphy = () => {
        axios.get(giphyUrl)
            .then(response => {
                console.log(response.data.data[0].images.downsized_large)
                this.setState({
                    giphies: [
                        ...this.state.giphies,
                        response.data.data[0].images.downsized_large
                    ]
                })
            })
            .catch(err => {
                console.log('yeah no giphy for you')
            })


        console.log("this is the _doClick function")
       
    }

}

export default GiphyApp;