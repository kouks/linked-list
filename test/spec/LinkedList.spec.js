const { expect } = require('chai')
const { LinkedList, Node } = require('../../src/LinkedList')

describe('LinkedList', () => {

  it('can be created', () => {
    expect(new LinkedList).to.be.ok
  })

  it('pushes the first element to the list head', () => {
    const list = new LinkedList()
    const node = new Node(1)

    list.push(node)

    expect(list.head).to.equal(node)
  })

  it('multiple elements can be pushed', () => {
    const list = new LinkedList()
    const node = new Node(1)

    list.push(node)
    list.push(new Node(2))
    list.push(new Node(3))

    expect(list.head).to.equal(node)
    expect(list.size()).to.equal(3)
  })

  it('retrieves and removes and element from the end of the list', () => {
    const list = new LinkedList()
    const node = new Node(3)

    list.push(new Node(1))
    list.push(new Node(2))
    list.push(node)

    expect(list.size()).to.equal(3)
    expect(list.pop()).to.equal(node)
    expect(list.size()).to.equal(2)
  })

  it('removes an element from a given index', () => {
    const list = new LinkedList()
    const node1 = new Node(1)
    const node3 = new Node(3)

    list.push(node1)
    list.push(new Node(2))
    list.push(node3)

    expect(list.size()).to.equal(3)

    list.remove(1)

    expect(list.size()).to.equal(2)
    expect(node1.next).to.equal(node3)
  })

  it('removes an element from a given index', () => {
    const list1 = new LinkedList()
    const list2 = new LinkedList()

    const node2 = new Node(2)
    const node3 = new Node(3)

    list1.push(new Node(1))
    list1.push(node2)

    list2.push(node3)
    list2.push(new Node(4))

    expect(list1.size()).to.equal(2)
    expect(list2.size()).to.equal(2)

    list1.append(list2)

    expect(list1.size()).to.equal(4)
    expect(node2.next).to.equal(node3)
  })

  it('clones a linked list', () => {
    const list = new LinkedList()

    list.push(new Node(1))
    list.push(new Node(2))

    expect(list.size()).to.equal(2)

    const clone = list.clone()

    list.push(new Node(3))

    expect(clone.size()).to.equal(2)
    expect(list.size()).to.equal(3)
  })

  it('has the ability to map values in the list', () => {
    const list = new LinkedList()

    list.push(new Node(1))
    list.push(new Node(2))
    list.push(new Node(3))

    list.map(value => value * value)

    expect(list.pop().value).to.equal(9)
    expect(list.pop().value).to.equal(4)
    expect(list.pop().value).to.equal(1)
  })

  it('handles pop on an empty list', () => {
    const list = new LinkedList()

    expect(list.pop()).to.equal(null)
  })

  it('handles size on an empty list', () => {
    const list = new LinkedList()

    expect(list.size()).to.equal(0)
  })

})
