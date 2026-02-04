import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const matches = [
  {
    id: '1',
    league: 'الدوري الإنجليزي الممتاز',
    commentator: 'عصام الشوالي',
    time: '18:30',
    home: {
      name: 'Arsenal',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
    },
    away: {
      name: 'Chelsea',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg'
    }
  },
  {
    id: '2',
    league: 'الدوري الإسباني',
    commentator: 'فارس عوض',
    time: '20:00',
    home: {
      name: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg'
    },
    away: {
      name: 'Barcelona',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg'
    }
  },
  {
    id: '3',
    league: 'الدوري الإيطالي',
    commentator: 'رؤوف خليف',
    time: '21:45',
    home: {
      name: 'Milan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg'
    },
    away: {
      name: 'Inter',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg'
    }
  }
];

const channels = [
  {
    id: '1',
    name: 'Kora Sport 1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/TV_icon_2.svg'
  },
  {
    id: '2',
    name: 'Kora Sport 2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/TV_icon_2.svg'
  },
  {
    id: '3',
    name: 'Kora Sport Premium',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/TV_icon_2.svg'
  },
  {
    id: '4',
    name: 'Kora Sport News',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/TV_icon_2.svg'
  }
];

function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 1800);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={['#0B0F1C', '#111B3C']} style={styles.splashContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.splashBadge}>
        <Text style={styles.splashBadgeText}>KS</Text>
      </View>
      <Text style={styles.splashTitle}>KoraSport</Text>
      <Text style={styles.splashSubtitle}>
        مباريات اليوم. بث مباشر. تجربة عصرية.
      </Text>
      <View style={styles.splashFooter}>
        <Text style={styles.splashFooterText}>جارٍ التحميل...</Text>
      </View>
    </LinearGradient>
  );
}

function EventsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#0B0F1C', '#111B3C']} style={styles.header}>
        <Text style={styles.headerTitle}>مباريات اليوم</Text>
        <Text style={styles.headerSubtitle}>تابع أهم المواجهات مباشرة</Text>
      </LinearGradient>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.matchCard}>
            <View style={styles.matchMeta}>
              <Text style={styles.matchLeague}>{item.league}</Text>
              <Text style={styles.matchCommentator}>المعلق: {item.commentator}</Text>
            </View>
            <View style={styles.teamsRow}>
              <View style={styles.teamBlock}>
                <Image source={{ uri: item.home.logo }} style={styles.teamLogo} />
                <Text style={styles.teamName}>{item.home.name}</Text>
              </View>
              <View style={styles.vsBlock}>
                <Text style={styles.matchTime}>{item.time}</Text>
                <Text style={styles.vsText}>VS</Text>
              </View>
              <View style={styles.teamBlock}>
                <Image source={{ uri: item.away.logo }} style={styles.teamLogo} />
                <Text style={styles.teamName}>{item.away.name}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.watchButton}>
              <Text style={styles.watchButtonText}>شاهد البث الآن</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function ChannelsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#0B0F1C', '#111B3C']} style={styles.header}>
        <Text style={styles.headerTitle}>القنوات</Text>
        <Text style={styles.headerSubtitle}>اختر القناة المفضلة لديك</Text>
      </LinearGradient>
      <FlatList
        data={channels}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.channelRow}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.channelCard}>
            <Image source={{ uri: item.logo }} style={styles.channelLogo} />
            <Text style={styles.channelName}>{item.name}</Text>
            <TouchableOpacity style={styles.channelButton}>
              <Text style={styles.channelButtonText}>افتح القناة</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#4D9FFF',
        tabBarInactiveTintColor: '#9AA2B1',
        tabBarLabelStyle: styles.tabLabel
      }}
    >
      <Tab.Screen name="Events" component={EventsScreen} options={{ title: 'الفعاليات' }} />
      <Tab.Screen name="Channels" component={ChannelsScreen} options={{ title: 'القنوات' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  splashBadge: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  splashBadgeText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700'
  },
  splashTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8
  },
  splashSubtitle: {
    color: '#C9D4FF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 48
  },
  splashFooter: {
    position: 'absolute',
    bottom: 40
  },
  splashFooterText: {
    color: '#8A94B8'
  },
  screen: {
    flex: 1,
    backgroundColor: '#0B0F1C'
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700'
  },
  headerSubtitle: {
    color: '#B4C3FF',
    marginTop: 6
  },
  listContent: {
    padding: 20,
    gap: 16
  },
  matchCard: {
    backgroundColor: '#141B2F',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5
  },
  matchMeta: {
    marginBottom: 12
  },
  matchLeague: {
    color: '#EAF0FF',
    fontWeight: '700',
    fontSize: 14
  },
  matchCommentator: {
    color: '#7D8AB8',
    marginTop: 4
  },
  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  teamBlock: {
    alignItems: 'center',
    flex: 1
  },
  teamLogo: {
    width: 48,
    height: 48,
    marginBottom: 6
  },
  teamName: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center'
  },
  vsBlock: {
    alignItems: 'center',
    paddingHorizontal: 8
  },
  matchTime: {
    color: '#4D9FFF',
    fontWeight: '700',
    fontSize: 16
  },
  vsText: {
    color: '#FFFFFF',
    fontWeight: '700',
    marginTop: 4
  },
  watchButton: {
    backgroundColor: '#4D9FFF',
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 16
  },
  watchButtonText: {
    color: '#0B0F1C',
    fontWeight: '700'
  },
  channelRow: {
    justifyContent: 'space-between'
  },
  channelCard: {
    backgroundColor: '#141B2F',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginBottom: 16
  },
  channelLogo: {
    width: 48,
    height: 48,
    marginBottom: 12
  },
  channelName: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12
  },
  channelButton: {
    backgroundColor: 'rgba(77, 159, 255, 0.18)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  channelButtonText: {
    color: '#4D9FFF',
    fontWeight: '600'
  },
  tabBar: {
    backgroundColor: '#0F162C',
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600'
  }
});
