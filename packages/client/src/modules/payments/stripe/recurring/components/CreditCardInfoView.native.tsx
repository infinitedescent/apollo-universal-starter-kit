import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TranslateFunction } from '../../../../../i18n';
import { CardItem, CardText, CardSubtitleText, CardLabel, Button, primary } from '../../../../common/components/native';

interface CardInfoViewProps {
  loading: boolean;
  creditCard: {
    expiryMonth: number;
    expiryYear: number;
    last4: string;
    brand: string;
  };
  t: TranslateFunction;
}

const renderCardItem = (title: string, value: string) => (
  <CardItem>
    <CardLabel style={styles.container}>{title}</CardLabel>
    <CardText style={styles.container}>{value}</CardText>
  </CardItem>
);

export default ({ loading, t, creditCard }: CardInfoViewProps) => {
  return (
    <View style={styles.container}>
      {!loading &&
        creditCard &&
        creditCard.expiryMonth &&
        creditCard.expiryYear &&
        creditCard.last4 &&
        creditCard.brand && (
          <View>
            <CardSubtitleText style={styles.container}>{t('card.title')}</CardSubtitleText>
            {renderCardItem(`${t('card.text.card')}: `, `${creditCard.brand} ************${creditCard.last4}`)}
            {renderCardItem(`${t('card.text.expires')}: `, `${creditCard.expiryMonth}/${creditCard.expiryYear}`)}
            <View>
              <View style={styles.buttonWrapper}>
                <Button color={primary}>{t('card.btnUpdate')}</Button>
              </View>
            </View>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonWrapper: {
    padding: 10
  }
});
