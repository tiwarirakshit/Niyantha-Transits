import { useState } from 'react';
import {FlatList, ScrollView, StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import Title from '../../components/Title';

const SelectCategory = ({navigation}) => {
  const category = [
    'Fish',
    'Meat',
    'Vegetables',
    'Fruits',
    'DryFruits',
    'Dairy',
  ];

  const FishTypes = [
    {
      type: 'All Types',
      uri: 'https://s3-alpha-sig.figma.com/img/a290/a326/a7fbfadc7a86a36434d6198a8c590478?Expires=1678060800&Signature=a61XVm4lkHLUWA~qXFkP95J-KS~LDKmu0BRbEBDPUFEeW~oN9o29uDbYRfz4mViPDuMfBzIA1o4Hwxq47t3dk~l1WwWsi3s78fF8KxP1mok5iQWZ3PmgRe~y6qbNi3jsg8bHwopEOJMzj-07ii~dLH1f6DJ05VO5YnGgkpQRV8UeKHgJE~IfvUQcLwIRwCZXE~YLXOtIBp8Tpa7yB6tS7237yav0o7MHUF6Vou7JkGg~WL8Z7HuMtz1QT6cI9ZOydQW4sKBSW9tlZmCsCZkDRyZvJ2z9OGoWh-7BmRgvPQ2H7vRX0ILV7ulfVAbBgsdvkSIn3E-7CKYAEq58IeqVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      type: 'Type 1',
      uri: 'https://s3-alpha-sig.figma.com/img/a290/a326/a7fbfadc7a86a36434d6198a8c590478?Expires=1678060800&Signature=a61XVm4lkHLUWA~qXFkP95J-KS~LDKmu0BRbEBDPUFEeW~oN9o29uDbYRfz4mViPDuMfBzIA1o4Hwxq47t3dk~l1WwWsi3s78fF8KxP1mok5iQWZ3PmgRe~y6qbNi3jsg8bHwopEOJMzj-07ii~dLH1f6DJ05VO5YnGgkpQRV8UeKHgJE~IfvUQcLwIRwCZXE~YLXOtIBp8Tpa7yB6tS7237yav0o7MHUF6Vou7JkGg~WL8Z7HuMtz1QT6cI9ZOydQW4sKBSW9tlZmCsCZkDRyZvJ2z9OGoWh-7BmRgvPQ2H7vRX0ILV7ulfVAbBgsdvkSIn3E-7CKYAEq58IeqVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      type: 'Type 2',
      uri: 'https://s3-alpha-sig.figma.com/img/96f8/87cd/c5372d27677494d353b47305162c32db?Expires=1678060800&Signature=cWWkn8lR1sx9c2DudQ1CybrwUWoj1Zmd7EKJAelJkWnD5diNU3HqTqtx8thGX6jdVjyAUXQ1yX010T7Mym5vo4UJ8cW3prVJ7vt8AmELjF03fvET1rf6Sp2hSSvuGqsFVpkomDbrevpE0JUBLnFRzUqK8uQb~8PTsnQqfJohfxe38yTDYDL3hlEc2-OxY2QZ7AEFjFjMTwXFFESCYd5jWhZnXTW8ZnHRXZfGnqaUH6eZnUK1jdXrj4Yjj4Ero1sLO~j-B4Yz6xsjjzLkY099qeNgL8MtgIIeLIaSX9qOOwjBRIxtKnOnaRe3QJthNov07O3bFfADt7OfBGwRCRh3~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      type: 'Type 3',
      uri: 'https://s3-alpha-sig.figma.com/img/cb8a/fecf/99dc56a65058420611e33bed5f8d133a?Expires=1678060800&Signature=NzosB4p1UV3X-3X8r85kgXA6DlLPLjr1-HreApcbFLHaK9BO18NGn05tb0a8K6awuYXOEZQZY571TdKHIVhR~ZVe6py~MbR-Gbw-nqxoHlXYJ3OioWDRgPPTLzEQI2B9ZPzsGYNP0mWm3LFYO0o7nnKNJ1-2tDXAIgkox2Zj8uMcKe77C1soZ-MHtjoEAM56qeeUJr8qB-wEOG2OpQ9q3rOclJAl-0oJqcarxaPDgeh0EAAXg2nGNt6lzwd17ToWOuSdPAN8dERjIUo4jRddvNbfEpynTnRmZ09mjexK3BGdiZYFO8fsfPG8x027dLKl~Lf6QghLVfYJYNDkLsW1Uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      type: 'Type 4',
      uri: 'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678060800&Signature=HW1K7Q5RY0uC5RGpITeUFRlWLwl8~IxvGVvjkkxuS98F~45fFJcTHTZB3CMA5uM7rwG0~CcbNLOAjHjlsDOjkh86Tk0ojvc2W-2gPMwFO1z~nM9FEu5rKqp9ZphP4pr-DaZ2qmsFqFoAt-40N9bE8LKr3sfYfnmVMCZDW~tIJAvZ3R-SIo9097VTLVHPrIwNnp7~wW5knp3RiGaJrmSoejBXliXhXypsJZV1WuRx5X6cGPTFFa4SbG1nbBpviNhs7SSi9HP7q-YkQAWZSdQSy3GRQjgi~qTc~UQddIjzA7I1wxIePXLad-vYeKZ36mg51dThKE01NzJrAkGQFEo0Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      type: 'Type 5',
      uri: 'https://s3-alpha-sig.figma.com/img/7f03/63da/89003105cb2c1cd82f2aca6cd4cb3641?Expires=1678060800&Signature=ZYn0Et2331Pvk9Ygxc4LhtpscEEkiILQApIRMBeY3FmdO2be6rjMtkrlB2BL4FfMG7j~wkjsGYsflmz5VEDqD-alA0G0OVD-M3GYIqMHZ04w87cjyLc2EeO~FVPFrhnbHl8x-Y6eIA~y~1wUFCnjVcuQEKI~vZoYXI~Q8U23sszHMdinBE9UjP6OBdml0n~GHSxr3cHYTSCEMnj02PVTX-xrKKfrVNDAaKN3JQg6gb~uIqPjVxRHncZAU5jB~MTcCRZKxQsGVCbVnGWMsNRKLxaVpWMF4Acqjwr4KdEspSTdAeUcT7fUqSODWdhUuPElce2Japai~KubKpouxGB32w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      type: 'Type 6',
      uri: 'https://s3-alpha-sig.figma.com/img/96f8/87cd/c5372d27677494d353b47305162c32db?Expires=1678060800&Signature=cWWkn8lR1sx9c2DudQ1CybrwUWoj1Zmd7EKJAelJkWnD5diNU3HqTqtx8thGX6jdVjyAUXQ1yX010T7Mym5vo4UJ8cW3prVJ7vt8AmELjF03fvET1rf6Sp2hSSvuGqsFVpkomDbrevpE0JUBLnFRzUqK8uQb~8PTsnQqfJohfxe38yTDYDL3hlEc2-OxY2QZ7AEFjFjMTwXFFESCYd5jWhZnXTW8ZnHRXZfGnqaUH6eZnUK1jdXrj4Yjj4Ero1sLO~j-B4Yz6xsjjzLkY099qeNgL8MtgIIeLIaSX9qOOwjBRIxtKnOnaRe3QJthNov07O3bFfADt7OfBGwRCRh3~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      type: 'Type 7',
      uri: 'https://s3-alpha-sig.figma.com/img/cb8a/fecf/99dc56a65058420611e33bed5f8d133a?Expires=1678060800&Signature=NzosB4p1UV3X-3X8r85kgXA6DlLPLjr1-HreApcbFLHaK9BO18NGn05tb0a8K6awuYXOEZQZY571TdKHIVhR~ZVe6py~MbR-Gbw-nqxoHlXYJ3OioWDRgPPTLzEQI2B9ZPzsGYNP0mWm3LFYO0o7nnKNJ1-2tDXAIgkox2Zj8uMcKe77C1soZ-MHtjoEAM56qeeUJr8qB-wEOG2OpQ9q3rOclJAl-0oJqcarxaPDgeh0EAAXg2nGNt6lzwd17ToWOuSdPAN8dERjIUo4jRddvNbfEpynTnRmZ09mjexK3BGdiZYFO8fsfPG8x027dLKl~Lf6QghLVfYJYNDkLsW1Uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];
  const fishes = [
    {
      name: 'Fish 1',
      uri: 'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678060800&Signature=HW1K7Q5RY0uC5RGpITeUFRlWLwl8~IxvGVvjkkxuS98F~45fFJcTHTZB3CMA5uM7rwG0~CcbNLOAjHjlsDOjkh86Tk0ojvc2W-2gPMwFO1z~nM9FEu5rKqp9ZphP4pr-DaZ2qmsFqFoAt-40N9bE8LKr3sfYfnmVMCZDW~tIJAvZ3R-SIo9097VTLVHPrIwNnp7~wW5knp3RiGaJrmSoejBXliXhXypsJZV1WuRx5X6cGPTFFa4SbG1nbBpviNhs7SSi9HP7q-YkQAWZSdQSy3GRQjgi~qTc~UQddIjzA7I1wxIePXLad-vYeKZ36mg51dThKE01NzJrAkGQFEo0Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      object: {
        name: 'Prawn',
        desc: 'Red sea prawn, medium sized.',
        image:
          'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678665600&Signature=FsyQSS3zgxToJXXa5b8iKWoT9ve6xgZ~Sfeg-H0Wq~VnQQ68XADMtS4fDnwPzG6XOg3OLXfoIHQAg--CUZjhFq9GK-16aJps8asnDWsx1GMb-9cMxjkdjG3n0zI~z2epbtL344c8lsm6UaAv9OvXLw4xW0RTIXZeADqUyY--QRKPsZj6wowkbQKQjhFQ4N3ViEnJMnNNBLLo92ySUYtBXzQ2T4fOFqZfrZzf-cK-~MWfyCDRsVFwja3dJ3xtb~qu1RxH4a2ys1yovHzS9JEr9isWF8S5AwuVZ82tJ6SCEbbAF00m2Flc0m5Blm-zwgF0zE4vCRSamTTJOsYlVIL3nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        grades: [
          {
            grade: 'A+',
            count: '80-85',
            quantity: 5,
            price: 2400,
            best: true,
          },
          {
            grade: 'C',
            count: '65-80',
            quantity: 1,
            price: 2000,
          },
          {
            grade: 'C',
            count: '40-65',
            quantity: 1,
            price: 2400,
          },
        ],
      }
    },
    {
      name: 'Fish 2',
      uri: 'https://s3-alpha-sig.figma.com/img/4f01/d10a/7538c27f3de5cfff9c89996e7e06ffda?Expires=1678060800&Signature=Rc46O1K-0L9RNexWHkPH1HESyla~q7RMnmD2G4QhJ0hbLo5KCC9yREQWlOTZT5V~n4SUvm5AMk9~vptMyECeWW8T8s~g2GWQ3VvbfCt5iQGOVpGFJXgWHihfqeUjEUOKMLL6uG-WAkM2GbpJIXrROtuJnX1PopvP~Tw6HedCBT-pDwaWfRKxWjJsU1vn1fnw9Vhs7jm9Cptc4~Pfo5EcuOZx8D0d7tqgarvAFiGR3VHYNZQRKWj1cz0nLvJ1DHlxwWjVvGfW5rlBL3Q~1rBCMSSB40kFCMuHXXmVC4OXybBFNoXrUtAPxMAtFBfP--ufnooxr4p1MayblM-5cfK-eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 3',
      uri: 'https://s3-alpha-sig.figma.com/img/96f8/87cd/c5372d27677494d353b47305162c32db?Expires=1678060800&Signature=cWWkn8lR1sx9c2DudQ1CybrwUWoj1Zmd7EKJAelJkWnD5diNU3HqTqtx8thGX6jdVjyAUXQ1yX010T7Mym5vo4UJ8cW3prVJ7vt8AmELjF03fvET1rf6Sp2hSSvuGqsFVpkomDbrevpE0JUBLnFRzUqK8uQb~8PTsnQqfJohfxe38yTDYDL3hlEc2-OxY2QZ7AEFjFjMTwXFFESCYd5jWhZnXTW8ZnHRXZfGnqaUH6eZnUK1jdXrj4Yjj4Ero1sLO~j-B4Yz6xsjjzLkY099qeNgL8MtgIIeLIaSX9qOOwjBRIxtKnOnaRe3QJthNov07O3bFfADt7OfBGwRCRh3~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 4',
      uri: 'https://s3-alpha-sig.figma.com/img/7f03/63da/89003105cb2c1cd82f2aca6cd4cb3641?Expires=1678060800&Signature=ZYn0Et2331Pvk9Ygxc4LhtpscEEkiILQApIRMBeY3FmdO2be6rjMtkrlB2BL4FfMG7j~wkjsGYsflmz5VEDqD-alA0G0OVD-M3GYIqMHZ04w87cjyLc2EeO~FVPFrhnbHl8x-Y6eIA~y~1wUFCnjVcuQEKI~vZoYXI~Q8U23sszHMdinBE9UjP6OBdml0n~GHSxr3cHYTSCEMnj02PVTX-xrKKfrVNDAaKN3JQg6gb~uIqPjVxRHncZAU5jB~MTcCRZKxQsGVCbVnGWMsNRKLxaVpWMF4Acqjwr4KdEspSTdAeUcT7fUqSODWdhUuPElce2Japai~KubKpouxGB32w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 5',
      uri: 'https://s3-alpha-sig.figma.com/img/cb8a/fecf/99dc56a65058420611e33bed5f8d133a?Expires=1678060800&Signature=NzosB4p1UV3X-3X8r85kgXA6DlLPLjr1-HreApcbFLHaK9BO18NGn05tb0a8K6awuYXOEZQZY571TdKHIVhR~ZVe6py~MbR-Gbw-nqxoHlXYJ3OioWDRgPPTLzEQI2B9ZPzsGYNP0mWm3LFYO0o7nnKNJ1-2tDXAIgkox2Zj8uMcKe77C1soZ-MHtjoEAM56qeeUJr8qB-wEOG2OpQ9q3rOclJAl-0oJqcarxaPDgeh0EAAXg2nGNt6lzwd17ToWOuSdPAN8dERjIUo4jRddvNbfEpynTnRmZ09mjexK3BGdiZYFO8fsfPG8x027dLKl~Lf6QghLVfYJYNDkLsW1Uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 6',
      uri: 'https://s3-alpha-sig.figma.com/img/4f01/d10a/7538c27f3de5cfff9c89996e7e06ffda?Expires=1678060800&Signature=Rc46O1K-0L9RNexWHkPH1HESyla~q7RMnmD2G4QhJ0hbLo5KCC9yREQWlOTZT5V~n4SUvm5AMk9~vptMyECeWW8T8s~g2GWQ3VvbfCt5iQGOVpGFJXgWHihfqeUjEUOKMLL6uG-WAkM2GbpJIXrROtuJnX1PopvP~Tw6HedCBT-pDwaWfRKxWjJsU1vn1fnw9Vhs7jm9Cptc4~Pfo5EcuOZx8D0d7tqgarvAFiGR3VHYNZQRKWj1cz0nLvJ1DHlxwWjVvGfW5rlBL3Q~1rBCMSSB40kFCMuHXXmVC4OXybBFNoXrUtAPxMAtFBfP--ufnooxr4p1MayblM-5cfK-eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 7',
      uri: 'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678060800&Signature=HW1K7Q5RY0uC5RGpITeUFRlWLwl8~IxvGVvjkkxuS98F~45fFJcTHTZB3CMA5uM7rwG0~CcbNLOAjHjlsDOjkh86Tk0ojvc2W-2gPMwFO1z~nM9FEu5rKqp9ZphP4pr-DaZ2qmsFqFoAt-40N9bE8LKr3sfYfnmVMCZDW~tIJAvZ3R-SIo9097VTLVHPrIwNnp7~wW5knp3RiGaJrmSoejBXliXhXypsJZV1WuRx5X6cGPTFFa4SbG1nbBpviNhs7SSi9HP7q-YkQAWZSdQSy3GRQjgi~qTc~UQddIjzA7I1wxIePXLad-vYeKZ36mg51dThKE01NzJrAkGQFEo0Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 8',
      uri: 'https://s3-alpha-sig.figma.com/img/96f8/87cd/c5372d27677494d353b47305162c32db?Expires=1678060800&Signature=cWWkn8lR1sx9c2DudQ1CybrwUWoj1Zmd7EKJAelJkWnD5diNU3HqTqtx8thGX6jdVjyAUXQ1yX010T7Mym5vo4UJ8cW3prVJ7vt8AmELjF03fvET1rf6Sp2hSSvuGqsFVpkomDbrevpE0JUBLnFRzUqK8uQb~8PTsnQqfJohfxe38yTDYDL3hlEc2-OxY2QZ7AEFjFjMTwXFFESCYd5jWhZnXTW8ZnHRXZfGnqaUH6eZnUK1jdXrj4Yjj4Ero1sLO~j-B4Yz6xsjjzLkY099qeNgL8MtgIIeLIaSX9qOOwjBRIxtKnOnaRe3QJthNov07O3bFfADt7OfBGwRCRh3~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 7',
      uri: 'https://s3-alpha-sig.figma.com/img/a290/a326/a7fbfadc7a86a36434d6198a8c590478?Expires=1678060800&Signature=a61XVm4lkHLUWA~qXFkP95J-KS~LDKmu0BRbEBDPUFEeW~oN9o29uDbYRfz4mViPDuMfBzIA1o4Hwxq47t3dk~l1WwWsi3s78fF8KxP1mok5iQWZ3PmgRe~y6qbNi3jsg8bHwopEOJMzj-07ii~dLH1f6DJ05VO5YnGgkpQRV8UeKHgJE~IfvUQcLwIRwCZXE~YLXOtIBp8Tpa7yB6tS7237yav0o7MHUF6Vou7JkGg~WL8Z7HuMtz1QT6cI9ZOydQW4sKBSW9tlZmCsCZkDRyZvJ2z9OGoWh-7BmRgvPQ2H7vRX0ILV7ulfVAbBgsdvkSIn3E-7CKYAEq58IeqVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Fish 8',
      uri: 'https://s3-alpha-sig.figma.com/img/96f8/87cd/c5372d27677494d353b47305162c32db?Expires=1678060800&Signature=cWWkn8lR1sx9c2DudQ1CybrwUWoj1Zmd7EKJAelJkWnD5diNU3HqTqtx8thGX6jdVjyAUXQ1yX010T7Mym5vo4UJ8cW3prVJ7vt8AmELjF03fvET1rf6Sp2hSSvuGqsFVpkomDbrevpE0JUBLnFRzUqK8uQb~8PTsnQqfJohfxe38yTDYDL3hlEc2-OxY2QZ7AEFjFjMTwXFFESCYd5jWhZnXTW8ZnHRXZfGnqaUH6eZnUK1jdXrj4Yjj4Ero1sLO~j-B4Yz6xsjjzLkY099qeNgL8MtgIIeLIaSX9qOOwjBRIxtKnOnaRe3QJthNov07O3bFfADt7OfBGwRCRh3~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  const [selected, setSelected] = useState(category[0]);

  function clickHandler(item){
    setSelected(item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInside}>
          <Title text={selected} />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: 50 }}>
        <FlatList
          data={category}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                clickHandler(item)
              }}
              style={[
                styles.item,
                selected === item ? { backgroundColor: '#FFFFFF' } : {},
              ]}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Category2', {
          title: selected,
          types: FishTypes,
          individualTypes: fishes
        })}
        style={{
          backgroundColor: '#FAD202',
          height: 50,
          width: '40%',
          borderRadius: 10,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 100,
        }}>
        <Text style={{ fontFamily: 'Fredoka', color: '#FFFFFF', fontSize: 20 }}>
          {'Done'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(250, 214, 27, 0.5)',
  },

  header: {
    height: 140,
    backgroundColor: '#FDDE3E',
  },

  headerInside: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '2%',
    justifyContent: 'space-evenly',
  },

  item: {
    height: 90,
    width: 120,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
  },

  text: {
    fontFamily: 'Fredoka',
  },
});

export default SelectCategory;
