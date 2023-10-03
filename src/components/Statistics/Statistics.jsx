import { StatList, Title, Item, StatisticsSection } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  const colors = ['#99c5c4', '#836953', '#aa9499', '#89cff0', '#befd73'];

  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <Item
            key={item.id}
            style={{
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

export default Statistics;
