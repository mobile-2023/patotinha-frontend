// TableComponent.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface TableComponentProps {
  data: string[][];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => `${index}-${item[0]}`}
    renderItem={({ item, index }) => (
      <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
        <View style={styles.cell}>
          <Text>{item[0]}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{item[1]}</Text>
        </View>
      </View>
    )}
    numColumns={1}
  />
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  evenRow: {
    backgroundColor: '#d3d3d3', // Cinza claro
  },
  oddRow: {
    backgroundColor: '#ffff', // Preto
  },
});

export default TableComponent;
