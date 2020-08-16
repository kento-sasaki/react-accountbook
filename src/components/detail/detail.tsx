/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import _ from 'lodash';
import {
  Segment,
  Grid,
  Table,
  Label,
  Header,
  SemanticICONS,
  SemanticCOLORS,
} from 'semantic-ui-react';
import { tagOptions } from '../../utils/utils';

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
    <Grid>
      <Grid.Column width={11}>
        <Table basic="very">
          <Table.Body>
            {_.chunk(tagExpensesDetails, 3).map((details, i1, self1) => (
              <Table.Row key={self1.indexOf(details)}>
                {details.map((detail, i2, self2) => (
                  <Table.Cell key={self2.indexOf(detail)}>
                    <Label
                      size="large"
                      color={detail.color}
                      icon={detail.icon}
                      content={`¥ ${detail.amount}`}
                    />
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Grid.Column>
      <Grid.Column width={5} verticalAlign="middle">
        <Segment inverted color="teal" textAlign="center">
          <Header content="Total Expenses" />
          <Header size="huge">
            ¥
            {tagExpenses.map((exp) => exp.amount).reduce((previous, current) => previous + current)}
          </Header>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
