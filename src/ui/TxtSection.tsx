const TxtSection: React.FC<TxtSectionProps> = ({
  title,
  fromDate,
  toDate,
  company,
  location,
}: TxtSectionProps) => (
  <div className="mt-[20px] sm:w-[50%] w-[100%]">
    <p>
      <b>{title},</b> {fromDate === toDate ? "" : `${fromDate} - `} {toDate}
      <br />
      <b>{company},</b> {location}
    </p>
  </div>
);

export default TxtSection;
