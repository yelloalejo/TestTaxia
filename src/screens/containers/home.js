import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestionList';
import CategoryList from '../../videos/containers/categoryList';
import API from '../../../utils/api';

class Home extends Component<props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <View>
        <Header />
        <CategoryList list={this.state.categoryList} />
        <Button
          title="Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  }
}
/**
<View>
        <Header />
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </View> */
export default Home;
