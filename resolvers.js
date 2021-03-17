module.exports = {
  Query: {
    getElements: async (_, { product }, { Element }) => {
      const elements = await Element.find({ product: product })
      return elements
    }
  },
  Mutation: {
    addElement: async (_, { product, selector, options, icon, label, value }, { Element }) => {
      const newElement = await new Element({
        product,
        selector,
        options,
        icon,
        label,
        value
      }).save()
      return newElement
    },
    
    updateElement: async (_, { elementId, product, selector, options, icon, label, value }, { Element }) => {
      return await Element.findOneAndUpdate(
        { _id: elementId },
        {
          $set: {
            product: product,
            selector: selector,
            options: options,
            icon: icon,
            label: label,
            value: value
          }
        },
        { new: true }
      )
    },
    addConfig: async (_, { jsonConfig }, { Config }) => {
      const newConfig = await new Config({
        jsonConfig
      }).save()
      return newConfig
    }
  }
}
