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
            S.listItem()
                .title('Speaking')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('speakingPage')
                        .documentId('speakingPage'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['indexPage', 'coachingPage', 'speakingPage'].includes(
                        listItem.getId(),
                    ),
            ),
        ]);
};
