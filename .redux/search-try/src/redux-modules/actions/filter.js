export const updateFilter = (id, val) => (
    {
        type: 'UPDATE_FIELD',
        payload: {
            id, val
        }
    }
)
export default updateFilter
