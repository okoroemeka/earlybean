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
export default {
  createTrustMock,
  Savings,
  initialFrequencyState,
  initialSaveMethodState,
  initialChildrenState,
};
