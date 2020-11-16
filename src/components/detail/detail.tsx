/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Segment, Grid, Header, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';
import { MyButton } from './myButton';
import { tagOptions, createTagExpense } from '../../utils/utils';
import { StoreExpense, TagLabel, Store } from '../../interfaces';

const displayFlex = css`
  display: flex;
`;

interface Props {
  expense: StoreExpense[];
  handleRequireClick?: (requirement: { tagLabel: TagLabel; require: boolean }) => void;
}

export const Detail: FC<Props> = ({ expense, handleRequireClick = () => {} }) => {
  const device = useSelector((store: Store) => store.device);
  const tagExpenses = createTagExpense(expense).map((exp) => {
    return {
      tagLabel: exp.tagLabel,
      amount: exp.amounts.reduce((previous, current) => {
        return previous + current;
      }),
    };
  });

  if (tagExpenses.length >= 1) {
    const tagExpensesDetails = tagExpenses.map((exp) => {
      return {
        label: exp.tagLabel,
        amount: exp.amount,
        icon: tagOptions[tagOptions.map((element) => element.text).indexOf(exp.tagLabel)].icon,
        color:
          tagOptions[tagOptions.map((element) => element.text).indexOf(exp.tagLabel)].colorlabel,
      };
    }) as {
      label: TagLabel;
      amount: number;
      icon: SemanticICONS;
      color: SemanticCOLORS;
    }[];

    if (device !== 'mobile') {
      return (
        <Grid columns="equal" data-testid="detail-table">
          <Grid.Row stretched>
            <Grid.Column width="11">
              {_.chunk(tagExpensesDetails, 2).map((details, i1, self1) => (
                <div css={displayFlex} key={self1.indexOf(details)}>
                  {details.map((detail, i2, self2) => (
                    <MyButton
                      detail={detail}
                      key={self2.indexOf(detail)}
                      handleRequireClick={handleRequireClick}
                    />
                  ))}
                </div>
              ))}
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width="5">
              <Segment inverted color="teal" textAlign="center">
                <Header content="支出総額" />
                <Header size="huge">
                  ¥
                  {tagExpenses
                    .map((exp) => exp.amount)
                    .reduce((previous, current) => previous + current)}
                </Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }

    if (device === 'mobile') {
      return (
        <div>
          {_.chunk(tagExpensesDetails, 3).map((details, i1, self1) => (
            <div css={displayFlex} key={self1.indexOf(details)}>
              {details.map((detail, i2, self2) => (
                <MyButton
                  detail={detail}
                  key={self2.indexOf(detail)}
                  handleRequireClick={handleRequireClick}
                  size="mini"
                />
              ))}
            </div>
          ))}
        </div>
      );
    }
  }

  return <Header content="支出がありません" />;
};
