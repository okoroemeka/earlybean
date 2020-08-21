import {images} from '../src/core/index';
const createTrustMock = [
  {
    userFirstName: 'zara',
    amount: 'N500,000',
    interestRate: '5%',
    userAvater: images.userAvater,
  },
  {
    userFirstName: 'zara',
    amount: 'N500,000',
    interestRate: '5%',
    userAvater: images.userAvater,
  },
  {
    userFirstName: 'zara',
    amount: 'N500,000',
    interestRate: '5%',
    userAvater: images.userAvater,
  },
  {
    userFirstName: 'zara',
    amount: 'N500,000',
    interestRate: '5%',
    userAvater: images.userAvater,
  },
  {
    userFirstName: 'zara',
    amount: 'N500,000',
    interestRate: '5%',
    userAvater: images.userAvater,
  },
];

const Savings = [
  {
    purpose: 'Trip to La Campagne!',
    goalAmount: 'N100,000',
    completionRate: '100%',
    constributionSoFar: 'N100,000',
    interestRate: '0%',
    deadLine: 'You have reached this goal!',
  },
  {
    purpose: 'Zoey’s Harvard Fund',
    goalAmount: 'N30,000,000',
    completionRate: '10%',
    constributionSoFar: 'N3,000,000',
    interestRate: '5.0%',
    deadLine: 'By 30 May 2030',
  },
  {
    purpose: 'Summer in Dubai',
    goalAmount: 'N1,000,000',
    completionRate: '20%',
    constributionSoFar: 'N200,000',
    interestRate: '8.0%',
    deadLine: 'By 25 July 2030',
  },
];
const initialFrequencyState = [
  {frequency: 'Daily', active: true},
  {frequency: 'Weekly', active: false},
  {frequency: 'Monthly', active: false},
];

const initialSaveMethodState = [
  {method: 'Manual', active: true},
  {method: 'Automatically', active: false},
];

const initialChildrenState = [
  {
    id: 0,
    imageUrl: images.userAvater,
    childName: 'Zara',
    active: false,
  },
  {
    id: 1,
    imageUrl: images.userAvater,
    childName: 'Xavier',
    active: false,
  },
  {
    id: 2,
    imageUrl: images.userAvater,
    childName: 'Zachary',
    active: false,
  },
  {
    id: 3,
    imageUrl: images.userAvater,
    childName: 'Zoey',
    active: false,
  },
];
const initialKidsState = [
  {
    id: 0,
    imageUrl: images.userAvater,
    firstName: 'Zara',
    lastName: 'Lawson',
    active: false,
  },
  {
    id: 1,
    imageUrl: images.userAvater,
    firstName: 'Xavier',
    lastName: 'Lawson',
    active: false,
  },
  {
    id: 2,
    imageUrl: images.userAvater,
    firstName: 'Zachary',
    lastName: 'Lawson',
    active: false,
  },
];
const transactionTime = [
  {
    id: 1,
    time: 'Day',
    active: false,
  },
  {
    id: 2,
    time: 'Week',
    active: false,
  },
  {
    id: 3,
    time: 'Month',
    active: false,
  },
  {
    id: 4,
    time: 'Year',
    active: false,
  },
];

const mockTransactions = [
  {
    title: 'Walk the dog',
    time: 'Yesterday 4:30pm',
    type: 'expenses',
    amount: '2,000',
    totalAmount: '6,700',
  },
  {
    title: 'Hans and Rene',
    time: '23 May 2020',
    type: 'income',
    amount: '2,000',
    totalAmount: '6,700',
  },
  {
    title: 'tidy bedroom',
    time: '23 May 2020',
    type: 'expenses',
    amount: '100',
    totalAmount: '6,700',
  },
];
const savingsMockData = [
  {
    id: '0-abts',
    title: 'savings',
    amount: '257,000',
    time: '09, Aug 2019',
    iconName: 'earningIcon',
    active: true,
  },
  {
    id: '1-adb',
    title: 'Spendings',
    amount: '150,000',
    time: '09, Aug 2019',
    iconName: 'spendingIcon',
    active: false,
  },
  {
    id: '2-adb',
    title: 'earnings',
    amount: '72,000',
    time: '09, Aug 2019',
    iconName: 'earningIcon',
    active: false,
  },
  {
    id: '3-abt',
    title: 'givings',
    amount: '70,000',
    time: '09, Aug 2019',
    iconName: 'givingIcon',
    active: false,
  },
];
const tasksMockData = [
  {
    id: 1,
    title: 'read bible',
    date: '17 monday june',
    reward: 'bean',
    status: 'completed',
  },
  {
    id: 2,
    title: 'clean toys',
    date: '17 monday june',
    reward: 'bean',
    status: 'mixed',
  },
  {
    id: 3,
    title: 'clean shoes',
    date: '17 monday june',
    reward: 'cash',
    status: 'incomplete',
    amount: 'N1,500',
  },
  {
    id: 4,
    title: 'wash mums car',
    date: '17 monday june',
    reward: 'cash',
    status: 'completed',
    amount: 'N1,500',
  },
];
const compoundInteresList = [
  {
    id: 1,
    interest: 1,
    active: false,
  },
  {
    id: 2,
    interest: 3.5,
    active: false,
  },
  {
    id: 3,
    interest: 5.5,
    active: false,
  },
  {
    id: 4,
    interest: 7,
    active: false,
  },
];
const monetryReward = [
  {
    id: 1,
    amount: 200,
    active: false,
  },
  {
    id: 2,
    amount: 500,
    active: false,
  },
];
const beanReward = [
  {
    id: 1,
    amount: 10,
    active: false,
  },
  {
    id: 2,
    amount: 50,
    active: false,
  },
  {
    id: 3,
    amount: 100,
    active: false,
  },
];
export default {
  createTrustMock,
  Savings,
  initialFrequencyState,
  initialSaveMethodState,
  initialChildrenState,
  initialKidsState,
  transactionTime,
  mockTransactions,
  savingsMockData,
  tasksMockData,
  compoundInteresList,
  monetryReward,
  beanReward,
};
