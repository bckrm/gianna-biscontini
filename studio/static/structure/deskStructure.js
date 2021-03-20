import S from '@sanity/desk-tool/structure-builder';
import {
    // VscAccount,
    VscFile,
    // VscFolder,
} from 'react-icons/vsc';

export default () => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Index')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('indexPage')
                        .documentId('indexPage'),
                ),
            S.listItem()
                .title('Coaching')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('coachingPage')
                        .documentId('coachingPage'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['indexPage', 'coachingPage'].includes(listItem.getId()),
            ),
        ]);
};
