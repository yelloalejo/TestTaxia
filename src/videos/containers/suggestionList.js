import React, {Component} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../../sections/components/verticalSeparator';
import Suggestion from '../components/suggestion';
class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  onPress = () => {
    console.log('hello from suggestion');
  };
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Suggestion {...item} />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
