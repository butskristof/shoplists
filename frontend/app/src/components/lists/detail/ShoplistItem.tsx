import { ChangeEvent, FC } from 'react';
import { Checkbox } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { ShoplistItem as ShoplistItemType } from '@/types/shoplists-api.types.ts';
import PaperContentBox from '@/components/common/PaperContentBox.tsx';
import { useShoplistsApiUpdateItem } from '@/data/shoplists-api.ts';

interface Props {
  item: ShoplistItemType;
}

const ShoplistItem: FC<Props> = ({ item }) => {
  const queryClient = useQueryClient();
  const mutation = useShoplistsApiUpdateItem(queryClient);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    mutation.mutate({
      ...item,
      ticked: event.target.checked,
    });
  };

  return (
    <PaperContentBox>
      <Checkbox
        label={item.name}
        checked={item.ticked}
        onChange={handleChange}
      />
    </PaperContentBox>
  );
};

export default ShoplistItem;