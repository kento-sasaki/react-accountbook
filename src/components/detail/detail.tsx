/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import _ from 'lodash';
import { Segment, Grid, Header, Button, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';
import { tagOptions } from '../../utils/utils';

const displayFlex = css`
  display: flex;
`;

const label = css`
  margin: 0.2rem 0.2rem !important;
  /* min-width: 8rem !important; */
`;

interface DetailProps {
  tagExpenses: {
    tagLabel: string;
    amount: number;
  }[];
}

export const Detail: FC<DetailProps> = ({ tagExpenses }) => {
  const tagExpensesDetails = tagExpenses.map((exp) => {
    return {
      label: exp.tagLabel,
      amount: exp.amount,
      icon: tagOptions[tagOptions.map((element) => element.text).indexOf(exp.tagLabel)].icon,
      color: tagOptions[tagOptions.map((element) => element.text).indexOf(exp.tagLabel)].colorLabel,
    };
  }) as {
    label: string;
    amount: number;
    icon: SemanticICONS;
    color: SemanticCOLORS;
  }[];

  return (
    <Grid columns="equal">
      <Grid.Row stretched>
        <Grid.Column width="11">
          {_.chunk(tagExpensesDetails, 3).map((details, i1, self1) => (
            <div css={displayFlex} key={self1.indexOf(details)}>
              {details.map((detail, i2, self2) => (
                <Button
                  css={label}
                  key={self2.indexOf(detail)}
                  size="large"
                  color={detail.color}
                  icon={detail.icon}
                  content={`¥ ${detail.amount}`}
                  basic
                  fluid
                />
              ))}
            </div>
          ))}
        </Grid.Column>
        <Grid.Column verticalAlign="middle" width="5">
          <Segment inverted color="teal" textAlign="center">
            <Header content="Total expenses" />
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
};
