const TxtSection: React.FC<TxtSectionProps> = ({
  title,
  fromDate,
  toDate,
  company,
  location,
}: TxtSectionProps) => (
  <div className="expeSection">
    <p>
      <b>{title},</b> {fromDate === toDate ? "" : `${fromDate} - `} {toDate}
      <br />
      <b>{company},</b> {location}
    </p>
  </div>
);

export default TxtSection;
