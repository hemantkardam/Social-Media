'use client';

import { useFormStatus } from 'react-dom';
import { LuUserMinus, LuUserPlus } from 'react-icons/lu';

import { Button, buttonVariants } from '@/components/ui/button';

export function FollowButtons({
  isFollowed,
  btnClasses,
  btnSize,
  iconSize = 20,
  isDisabled,
}: {
  isFollowed: boolean;
  btnClasses?: string;
  btnSize?: any;
  iconSize?: number;
  isDisabled?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      size={btnSize || 'default'}
      className={btnClasses || 'rounded-full gap-2'}
      type="submit"
      variant={!pending && isFollowed ? 'secondary' : 'default'}
      disabled={pending || isDisabled}
      aria-disabled={pending || isDisabled}
    >
      {!pending && isFollowed ? (
        <LuUserMinus size={iconSize} />
      ) : (
        <LuUserPlus size={iconSize} />
      )}
      <span className="text-sm">
        {!pending && isFollowed ? 'Following' : 'Follow'}
      </span>
    </Button>
  );
}
