interface TooltipProps {
  children: React.ReactNode;
  tooltip?: string;
}
export const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }): JSX.Element => {
  return (
    <div
      className="tooltip tooltip-bottom tooltip-secondary group-hover:tooltip-open font-bold before:left-auto before:transform-none before:content-[attr(data-tip)] before:right-0"
      data-tip={tooltip}
    >
      {children}
    </div>
  );
};
