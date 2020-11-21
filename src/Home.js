import React from 'react';
import axios from 'axios';

class Home extends React.Component{

    componentDidMount(){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=obstacle')
        .then(response => console.log(response.data))
    }


    render(){
        return(
            <div className="div"></div>   
        )
    }

}

export default Home;