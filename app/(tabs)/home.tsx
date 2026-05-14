import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppText weight="bold" size={20}>
        Home (TODO)
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
