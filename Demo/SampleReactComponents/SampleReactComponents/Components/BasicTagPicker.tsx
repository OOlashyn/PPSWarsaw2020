import * as React from "react";
import { TagPicker, ITag } from 'office-ui-fabric-react';

const _testTags: ITag[] = [
    'Amazon',
    'Facebook',
    'Microsoft',
    'OnePlus',
    'Google',
    'Xiaomi',
    'Samsung'
].map(item => ({ key: item, name: item }));

const getTextFromItem = (item: ITag): string => item.name ;

const onFilterChanged = (filterText: string, tagList?: ITag[]): ITag[] => {
    return filterText
      ? _testTags.filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)
                 .filter(tag => !listContainsDocument(tag, tagList))
      : [];
};

const listContainsDocument = (tag: ITag, tagList?: ITag[]) => {
    if (!tagList || !tagList.length || tagList.length === 0) {
      return false;
    }
    return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
}


export const BasicTagPicker = () =>
    <TagPicker
        removeButtonAriaLabel="Remove"
        onResolveSuggestions={onFilterChanged}
        getTextFromItem={getTextFromItem}
        pickerSuggestionsProps={{
            suggestionsHeaderText: 'Suggested Tags',
            noResultsFoundText: 'No Account Tags Found'
        }}
    />