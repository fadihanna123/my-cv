const TxtSection: React.FC<TxtSectionProps> = ({
  title,
  fromDate,
  toDate,
  company,
  location,
}: TxtSectionProps) => (
  <div className="mt-[20px] border rouned-full p-2 m-2">
    <p>
      <b>{title},</b> {fromDate === toDate ? "" : `${fromDate} - `} {toDate}
      <br />
      <b>{company},</b> {location}
    </p>
  </div>
);

export default TxtSection;
