import React, { Component } from "react";
import AddQuoteForm from "./AddQuoteForm";
import CitiesList from "./CitiesList";
import axios from "axios";
import "./Cities.css";

const QUOTE_SERVICE_URL = "http://localhost:5000/cities";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      ciudades: []
    };
  }

  componentDidMount() {
    const data = this.fetchQuotes();
  }
  render() {
    const title = "Toma ciudades!";
    return (
      <div className="App">
        <h2 className="App-title">{title}</h2>
        <div>
          {this.state.isFetching
            ? "Fetching quotes..."
            : <CitiesList data={this.state.ciudades} />}
        </div>

        <AddQuoteForm quote_service_url={QUOTE_SERVICE_URL} />
      </div>
    );
  }

  fetchQuotes = () => {
    this.setState({ ...this.state, isFetching: true });
    axios
      .get(QUOTE_SERVICE_URL)
      .then(response => {
        console.log(response);
        this.setState({ ciudades: response.data, isFetching: false });
        console.log(this.state.ciudades);
      })
      .catch(e => console.log(e));
  };
}

export default Cities;
