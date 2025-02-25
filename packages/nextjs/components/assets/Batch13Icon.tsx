interface Batch13Icon {
  className?: string; // Additional classes can be added
}

export const Batch13Icon: React.FC<Batch13Icon> = ({ className }) => {
  return (
    <div
      className={`batch-13-icon flex items-center justify-center dark:text-white font-bold px-2 rounded-full shadow-lg ${className}`}
      style={{ width: 30, height: 30, fontSize: 30 * 0.4 }}
    >
      13
    </div>
  );
};
